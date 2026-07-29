#!/usr/bin/env node
'use strict';
/**
 * nutrition_calculator.js — deterministic carbs/calories/protein/fat totals
 * from a food database, given a list of {food, servings} items.
 *
 * Generic and personal-data-free by design: swap food_database.json for
 * your own staples and this works for anyone who forks this repo.
 *
 * CLI:  node nutrition_calculator.js '[{"food":"chicken breast","servings":1.5}]'
 * Lib:  const { calculateMeal, calculateDailyTotal } = require('./nutrition_calculator');
 */

const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'food_database.json');

function loadDatabase() {
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
}

function normalize(name) {
  return String(name).toLowerCase().trim().replace(/[^a-z0-9 ]/g, '');
}

function findFood(db, name) {
  const n = normalize(name);
  if (db[n]) return { key: n, ...db[n] };
  const keys = Object.keys(db);
  const match = keys.find(k => n.includes(k) || k.includes(n));
  return match ? { key: match, ...db[match] } : null;
}

function round(n, decimals = 1) {
  const f = 10 ** decimals;
  return Math.round(n * f) / f;
}

/** Sum one meal's worth of {food, servings} items into totals. */
function calculateMeal(items, db) {
  db = db || loadDatabase();
  const totals = { carbs_g: 0, calories: 0, protein_g: 0, fat_g: 0 };
  const matched = [];
  const unmatched = [];

  for (const item of items || []) {
    const servings = Number(item.servings) || 1;
    const food = findFood(db, item.food);
    if (!food) { unmatched.push(item.food); continue; }
    totals.carbs_g   += food.carbs_g * servings;
    totals.calories  += food.calories * servings;
    totals.protein_g += food.protein_g * servings;
    totals.fat_g      += food.fat_g * servings;
    matched.push({ food: item.food, matchedTo: food.key, servings });
  }

  return {
    carbs_g:   round(totals.carbs_g),
    calories:  Math.round(totals.calories),
    protein_g: round(totals.protein_g),
    fat_g:     round(totals.fat_g),
    matched,
    unmatched,
  };
}

/** Sum multiple meals (each an array of {food, servings}, or {items: [...]}) into a daily total. */
function calculateDailyTotal(meals, db) {
  db = db || loadDatabase();
  const totals = { carbs_g: 0, calories: 0, protein_g: 0, fat_g: 0 };
  const unmatched = [];

  for (const meal of meals || []) {
    const items = Array.isArray(meal) ? meal : (meal.items || []);
    const r = calculateMeal(items, db);
    totals.carbs_g   += r.carbs_g;
    totals.calories  += r.calories;
    totals.protein_g += r.protein_g;
    totals.fat_g      += r.fat_g;
    unmatched.push(...r.unmatched);
  }

  return {
    carbs_g:   round(totals.carbs_g),
    calories:  Math.round(totals.calories),
    protein_g: round(totals.protein_g),
    fat_g:     round(totals.fat_g),
    unmatched,
  };
}

module.exports = { calculateMeal, calculateDailyTotal, loadDatabase, findFood };

if (require.main === module) {
  const arg = process.argv[2];
  if (!arg) {
    console.error('Usage: node nutrition_calculator.js \'[{"food":"chicken breast","servings":1.5}]\'');
    process.exit(1);
  }
  let items;
  try { items = JSON.parse(arg); }
  catch (e) { console.error('Invalid JSON input:', e.message); process.exit(1); }
  console.log(JSON.stringify(calculateMeal(items), null, 2));
}
