# StudyFlow Test Summary Report

## 1. Test Cycle

**Project:** StudyFlow Learning Progress Dashboard  
**Tester:** Tortrong Yang  
**Test Cycle:** Initial QA cycle  
**Manual test dates:** Not fully recorded  
**API test date recorded in existing notes:** September 27, 2026

**Environments recorded:**
- Manual application checks: Windows 11 / Google Chrome
- API checks: Windows 11 / Postman / Docker Compose / local API

This report summarizes the results currently recorded in the QA documents. It does not represent a completed test cycle for every StudyFlow feature.

## 2. Planned Testing Scope

The test plan covers:

- Registration, login, and protected routes
- Resource create, read, update, and delete workflows
- Completion tracking, search, filtering, and sorting
- User-specific data access and authorization
- API request and response behavior
- Responsive UI checks
- Selected frontend component tests
- Regression checks after changes

A feature appearing in the planned scope does not mean it has already been tested.

## 3. Manual Test Case Results

The current `MANUAL_TEST_CASES.md` contains 17 defined test cases. Their recorded status is:

| Result | Count |
|---|---:|
| Passed | 5 |
| Failed | 0 |
| Blocked | 0 |
| Not Run | 12 |
| **Total defined cases** | **17** |

The five passing cases are the authentication cases `TC-AUTH-001` through `TC-AUTH-005`. The 12 cases still marked **Not Run** cover resource management, search, filtering, sorting, and desktop/tablet/mobile UI checks.

These counts reflect the statuses written in `MANUAL_TEST_CASES.md`; they do not mean that every planned feature has passed testing. The registration test case records three successful runs.

## 4. API Testing Recorded in Postman

The existing QA notes record six API operations as passing on September 27, 2026:

| Operation | Recorded HTTP status | Recorded result |
|---|---:|---|
| `POST /auth/register` | 201 | Passed |
| `POST /auth/login` | 200 | Passed |
| `GET /resources` | 200 | Passed |
| `POST /resources` | 201 | Passed |
| `PUT /resources/:id` | 200 | Passed |
| `DELETE /resources/:id` | 200 | Passed |

**Recorded result:** 6 of 6 listed API operations returned the expected responses, according to the existing test notes. Negative API cases and user-to-user resource ownership scenarios still need explicit evidence in the QA records.

## 5. Automated Frontend Tests

The repository contains three Vitest / React Testing Library test cases:

| Test file | Behavior checked |
|---|---|
| `client/src/pages/Landing.test.tsx` | Landing-page hero and call-to-action links render |
| `client/src/pages/auth/Login.test.tsx` | Login email and password inputs can be filled |
| `client/src/components/Taskcard.test.tsx` | Double-clicking a task title enters edit mode |

The latest automated test run and its result are **not recorded in this report**. Run `npm run test:run` from the `client` directory and record the date and result before describing these tests as passing.

The backend package currently has a placeholder `npm test` script rather than a backend automated test suite. The recorded API checks above are manual Postman checks.

## 6. Defects

No individual defect reports are currently entered in `DEFECT_REPORTS.md`; that file contains a defect-report template. This means defects have not been documented there, not that the application is proven defect-free.

When a defect is found, record its reproduction steps, expected and actual results, severity, evidence, fix, and retest result.

## 7. Regression Testing

**Completed:** No regression run is recorded.  
**Result:** Not yet executed.

The checklist in `REGRESSION_CHECKLIST.md` remains available for documenting a future run. Do not mark checks complete until each one has actually been performed.

## 8. Remaining Work

- Execute and record the 12 manual test cases currently marked Not Run.
- Add explicit test cases for user ownership/access control and unauthorized API requests, then record their results.
- Run the three frontend automated tests and record the result and date.
- Add backend automated tests when practical.
- Perform and document a regression run after relevant fixes or changes.
- Record any discovered defects and retest outcomes.

## 9. Overall Assessment

**QA status: In progress.**

The documented results show five passing manual authentication cases and six passing API operations recorded in Postman notes. However, 12 defined manual cases remain unrun, the latest frontend automated test result is not recorded here, and regression testing has not been documented as completed.

**Recommendation: Additional testing required.**
