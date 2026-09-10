# StudyFlow Test Plan

## 1. Purpose

This test plan defines the testing approach for StudyFlow, a full-stack
learning progress dashboard that allows authenticated users to manage
courses, articles, and projects.

The purpose of testing is to verify that core user workflows function
correctly, API responses return expected results, user-owned data remains
protected, and the interface behaves consistently across supported screen
sizes.

---

## 2. Test Objectives

The primary objectives are to verify:

- User registration and login behavior
- Authentication and protected-route behavior
- Resource creation, viewing, editing, and deletion
- Resource completion status
- Search functionality
- Resource type filtering
- Completion filtering
- Alphabetical sorting
- User resource ownership and access control
- API request and response behavior
- Error handling
- Responsive user interface behavior
- Core functionality after software changes

---

## 3. Scope

### In Scope

The following StudyFlow functionality will be tested:

#### Authentication
- User registration
- User login
- Invalid login attempts
- Authentication token handling
- Protected application routes
- Unauthorized API requests

#### Resource Management
- Create a resource
- View resources
- Edit a resource
- Delete a resource
- Mark a resource complete or incomplete

#### Search and Organization
- Search resources by text
- Filter resources by type
- Filter resources by completion status
- Sort resources alphabetically
- Combine filters where applicable

#### API
- POST /auth/register
- POST /auth/login
- GET /resources
- POST /resources
- PUT /resources/:id
- DELETE /resources/:id

#### User Interface
- Login and registration forms
- Navigation
- Dashboard
- Resource cards
- Search controls
- Filter controls
- Responsive layouts

---

## 4. Out of Scope

The following areas are not currently part of this test cycle:

- Load testing
- Large-scale performance testing
- Penetration testing
- Production infrastructure testing
- Browser support outside the selected test browsers
- Third-party hosting infrastructure
- Automated accessibility auditing

These areas may be added in future test cycles.

---

## 5. Test Types

### Manual Functional Testing

Manual testing will verify that application features behave according to
expected user requirements.

### API Testing

Postman will be used to verify API status codes, response bodies,
authentication behavior, CRUD operations, and negative scenarios.

### UI Testing

The application interface will be manually reviewed at desktop, tablet,
and mobile viewport sizes.

### Automated Testing

Vitest and React Testing Library will be used to test selected frontend
components and user interactions.

### Regression Testing

Core workflows will be re-executed after application changes to verify
that previously working functionality remains operational.

---

## 6. Test Environment

### Application

Frontend:
StudyFlow React application

Backend:
Node.js / Express REST API

Database:
PostgreSQL

### Browsers

Primary:
- Google Chrome

Secondary:
- Microsoft Edge

### Operating System

- Windows 11

### Viewports

Desktop:
1440 × 900

Tablet:
768 × 1024

Mobile:
375 × 667

---

## 7. Test Data

Testing will use dedicated test accounts and sample resources.

Example test user:

Email:
qa.studyflow@example.com

Example resource data:

Course:
React Testing Fundamentals

Article:
Understanding REST APIs

Project:
QA Portfolio Project

Test data should not contain personal or sensitive information.

---

## 8. Test Case Status

Each manual test case will use one of the following statuses:

- Not Run
- Pass
- Fail
- Blocked

---

## 9. Defect Severity

### Critical

Application or major workflow cannot be used.

Example:
Users cannot log in.

### High

Major functionality does not work and there is no reasonable workaround.

Example:
Users cannot create resources.

### Medium

Functionality works incorrectly but a workaround exists.

Example:
Search returns incorrect results under certain conditions.

### Low

Minor issue that does not prevent the user from completing the workflow.

Example:
UI alignment issue on a specific screen size.

---

## 10. Entry Criteria

Testing may begin when:

- Frontend application is running
- Backend API is available
- PostgreSQL database is available
- Test account can be created
- Required test data can be added

---

## 11. Exit Criteria

The test cycle may be considered complete when:

- All planned high-priority test cases have been executed
- Critical workflows pass
- Critical and High severity defects are resolved or documented
- Fixed defects have been retested
- Regression testing has been completed
- Test results have been documented

---

## 12. Test Deliverables

Testing evidence will be maintained in:

- MANUAL_TEST_CASES.md
- REGRESSION_CHECKLIST.md
- DEFECT_REPORTS.md
- TEST_SUMMARY_REPORT.md
- Postman API collection
- Automated test files