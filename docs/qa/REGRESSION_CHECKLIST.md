# StudyFlow Regression Checklist

## Purpose

This checklist is used after bug fixes, feature changes, dependency updates,
or deployment changes to confirm that core StudyFlow functionality continues
to operate correctly.

---

## Test Cycle Information

**Date:**

**Tester:**
Tortrong Yang

**Build / Commit:**

**Environment:**

**Change Being Verified:**

---

# Authentication

- [ ] User can register a valid account
- [ ] User can log in with valid credentials
- [ ] Invalid credentials are rejected
- [ ] Authenticated user can access dashboard
- [ ] Unauthenticated user cannot access protected dashboard
- [ ] Logout removes authenticated access
- [ ] Unauthorized API requests are rejected

---

# Resource Management

- [ ] User can create a course
- [ ] User can create an article
- [ ] User can create a project
- [ ] Newly created resource appears on dashboard
- [ ] User can edit an existing resource
- [ ] Edited value remains after page refresh
- [ ] User can mark resource complete
- [ ] User can mark resource incomplete
- [ ] Completion status remains after refresh
- [ ] User can delete a resource
- [ ] Deleted resource does not return after refresh

---

# Search / Filter / Sort

- [ ] Search returns matching resource
- [ ] Search excludes unrelated resources
- [ ] Empty search behaves correctly
- [ ] Course filter displays courses
- [ ] Article filter displays articles
- [ ] Project filter displays projects
- [ ] Completed filter displays completed resources
- [ ] Incomplete filter displays incomplete resources
- [ ] Ascending sort produces correct order
- [ ] Descending sort produces correct order

---

# User Access Control

- [ ] User only sees their own resources
- [ ] User cannot update another user's resource
- [ ] User cannot delete another user's resource
- [ ] Missing or invalid authentication token is rejected

---

# UI

## Desktop

- [ ] Navigation displays correctly
- [ ] Dashboard displays correctly
- [ ] Resource cards fit layout
- [ ] Search controls work
- [ ] Filter controls work
- [ ] No unintended horizontal overflow

## Tablet

- [ ] Navigation remains usable
- [ ] Dashboard remains readable
- [ ] Cards remain inside viewport
- [ ] Controls remain accessible
- [ ] No unintended overlap

## Mobile

- [ ] Navigation remains usable
- [ ] Content remains inside viewport
- [ ] Resource cards remain readable
- [ ] Buttons remain accessible
- [ ] Forms remain usable
- [ ] No unintended horizontal scrolling

---

# API Smoke Check

- [ ] POST /auth/login responds correctly
- [ ] GET /resources responds correctly
- [ ] POST /resources responds correctly
- [ ] PUT /resources/:id responds correctly
- [ ] DELETE /resources/:id responds correctly

---

# Regression Result

**Overall Status:**

- [ ] Pass
- [ ] Fail
- [ ] Blocked

## Failed Checks

None.

## Notes

None.