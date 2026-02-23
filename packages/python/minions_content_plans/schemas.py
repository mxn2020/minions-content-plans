"""
Minions Content-plans SDK — Type Schemas
Custom MinionType schemas for Minions Content-plans.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

content_calendar_type = MinionType(
    id="content-plans-content-calendar",
    name="Content calendar",
    slug="content-calendar",
    description="A time-bound content plan for an account group.",
    icon="��",
    schema=[
        FieldDefinition(name="accountGroupId", type="string", label="accountGroupId"),
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="periodStart", type="string", label="periodStart"),
        FieldDefinition(name="periodEnd", type="string", label="periodEnd"),
        FieldDefinition(name="theme", type="string", label="theme"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

calendar_slot_type = MinionType(
    id="content-plans-calendar-slot",
    name="Calendar slot",
    slug="calendar-slot",
    description="A specific posting slot within a content calendar.",
    icon="🕐",
    schema=[
        FieldDefinition(name="calendarId", type="string", label="calendarId"),
        FieldDefinition(name="accountId", type="string", label="accountId"),
        FieldDefinition(name="scheduledAt", type="string", label="scheduledAt"),
        FieldDefinition(name="contentType", type="select", label="contentType"),
        FieldDefinition(name="assetId", type="string", label="assetId"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

posting_schedule_type = MinionType(
    id="content-plans-posting-schedule",
    name="Posting schedule",
    slug="posting-schedule",
    description="Recurring posting rules for an account.",
    icon="🔄",
    schema=[
        FieldDefinition(name="accountId", type="string", label="accountId"),
        FieldDefinition(name="dayOfWeek", type="select", label="dayOfWeek"),
        FieldDefinition(name="timeOfDay", type="string", label="timeOfDay"),
        FieldDefinition(name="contentType", type="select", label="contentType"),
        FieldDefinition(name="frequency", type="select", label="frequency"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

custom_types: list[MinionType] = [
    content_calendar_type,
    calendar_slot_type,
    posting_schedule_type,
]

