/**
 * Minions Content-plans SDK
 *
 * Content calendars, themes, and posting schedules per account group
 *
 * @module @minions-content-plans/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Content-plans.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
