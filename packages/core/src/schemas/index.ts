/**
 * @module @minions-content-plans/sdk/schemas
 * Custom MinionType schemas for Minions Content-plans.
 */

import type { MinionType } from 'minions-sdk';

export const contentcalendarType: MinionType = {
  id: 'content-plans-content-calendar',
  name: 'Content calendar',
  slug: 'content-calendar',
  description: 'A time-bound content plan for an account group.',
  icon: '��',
  schema: [
    { name: 'accountGroupId', type: 'string', label: 'accountGroupId' },
    { name: 'name', type: 'string', label: 'name' },
    { name: 'periodStart', type: 'string', label: 'periodStart' },
    { name: 'periodEnd', type: 'string', label: 'periodEnd' },
    { name: 'theme', type: 'string', label: 'theme' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const calendarslotType: MinionType = {
  id: 'content-plans-calendar-slot',
  name: 'Calendar slot',
  slug: 'calendar-slot',
  description: 'A specific posting slot within a content calendar.',
  icon: '🕐',
  schema: [
    { name: 'calendarId', type: 'string', label: 'calendarId' },
    { name: 'accountId', type: 'string', label: 'accountId' },
    { name: 'scheduledAt', type: 'string', label: 'scheduledAt' },
    { name: 'contentType', type: 'select', label: 'contentType' },
    { name: 'assetId', type: 'string', label: 'assetId' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const postingscheduleType: MinionType = {
  id: 'content-plans-posting-schedule',
  name: 'Posting schedule',
  slug: 'posting-schedule',
  description: 'Recurring posting rules for an account.',
  icon: '🔄',
  schema: [
    { name: 'accountId', type: 'string', label: 'accountId' },
    { name: 'dayOfWeek', type: 'select', label: 'dayOfWeek' },
    { name: 'timeOfDay', type: 'string', label: 'timeOfDay' },
    { name: 'contentType', type: 'select', label: 'contentType' },
    { name: 'frequency', type: 'select', label: 'frequency' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const customTypes: MinionType[] = [
  contentcalendarType,
  calendarslotType,
  postingscheduleType,
];

