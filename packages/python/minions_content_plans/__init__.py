"""
Minions Content-plans Python SDK

Content calendars, themes, and posting schedules per account group
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Content-plans.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
