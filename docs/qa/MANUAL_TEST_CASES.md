# StudyFlow Manual Test Cases

## Test Case Status

- Not Run
- Pass
- Fail
- Blocked

---

# Authentication Tests

## TC-AUTH-001 — Login With Valid Credentials

**Test Type:** Functional  
**Priority:** High  
**Status:** PASS

### Preconditions

- A registered StudyFlow account exists.
- The user is currently logged out.

### Test Data

Email:
qa.studyflow@example.com

Password:
Valid test password

### Steps

1. Open the StudyFlow login page.
2. Enter a valid registered email address.
3. Enter the correct password.
4. Select the Sign In button.

### Expected Result

- Login succeeds.
- The user is authenticated.
- The dashboard is displayed.
- The user can access protected StudyFlow features.

### Execution History

| Run | Approx. Login Time | Result |
|---|---:|---|
| 1 | ~1 second | Pass |
| 2 | ~1 second | Pass |

### Actual Result

Login succeeded using the registered user's valid email address and password.
The application authenticated the user and displayed the StudyFlow dashboard.

### Notes

During creation of the test account, registration took an unexpectedly long
time before navigating to the login page. This behavior will be tested
separately as a registration test case.

### Result

Pass

---

## TC-AUTH-002 — Login With Incorrect Password

**Test Type:** Negative / Functional  
**Priority:** High  
**Status:** PASS

### Preconditions

- A registered account exists.
- The user is logged out.

### Steps

1. Open the login page.
2. Enter a valid registered email address.
3. Enter an incorrect password.
4. Select Sign In.

### Expected Result

- Authentication is rejected.
- The dashboard is not displayed.
- An appropriate error message is shown.
- No authenticated session is created.

### Execution-History

| Run | Scenario | Result |
|---|---|---|
| 1 | Valid email + incorrect password | Pass |

### Actual Result

Login request was rejected when a valid registered email address was
submitted with an incorrect password. The dashboard did not appear, and
the application displayed the red error message:

"Invalid email or password"

The user remained unauthenticated.

### Status

Pass

---

## TC-AUTH-003 — Access Dashboard While Logged Out

**Test Type:** Security / Functional  
**Priority:** High  
**Status:** PASS

### Preconditions

- User is logged out.
- No valid authentication token exists.

### Steps

1. Enter the StudyFlow dashboard URL directly in the browser.
2. Attempt to load the page.

### Expected Result

- The protected dashboard is not displayed.
- The user is redirected to an appropriate public or login page.

### Actual Result

Entered ".../dashboard" in the localhost URL and dashboard is not displayed. 
User is redirected to login portal page. 

### Status

Pass

---

## TC-AUTH-004 — Login With Invalid Email

**Test Type:** Negative / Functional  
**Priority:** Medium  
**Status:** PASS

### Steps

1. Open the login page.
2. Enter an email address that is not registered.
3. Enter any password.
4. Select Sign In.

### Expected Result

- Authentication fails.
- The user remains logged out.
- An appropriate error message is displayed.

### Actual Result

Login request was rejected when an unregistered email address and a
random password were submitted.

Application displayed the red error message

### Status 

Pass

---

## TC-AUTH-005 — Register New User With Valid Credentials

**Test Type:** Functional
**Priority:** High
**Status:** PASS

### Preconditions

- User is logged out.
- The email address has not previously been registered.

### Test Data

Email:
Use a new test email address.
qa2.studyflow@example.com

Password:
Use a valid password meeting application requirements.
Valid test password

### Steps

1. Open the StudyFlow registration page.
2. Enter a new valid email address.
3. Enter a valid password.
4. Select the Register button once.
5. Observe the button and page behavior.
6. Record how long the registration request takes.
7. Verify whether the application navigates to the login page.
8. Attempt to log in using the newly created account.

### Expected Result

- The registration request is submitted after one click.
- The application provides feedback while registration is processing.
- The user account is created successfully.
- The application navigates to the login page after successful registration.
- The newly registered credentials can be used to log in.

### Execution History

| Run | Test Account | Approx. Registration Time | Result |
|---|---|---:|---|
| 1 | qa2.studyflow@example.com | ~1 second | Pass |
| 2 | qa3.studyflow@example.com | ~1 second | Pass |
| 3 | qa4.studyflow@example.com | ~1 second | Pass |

### Actual Result

The Register button changed to "Creating account..." immediately after
submission. Registration completed in approximately one second, and the
application proceeded to the login page. The newly created account was
successfully authenticated using the registered credentials.

### Notes

An earlier registration attempt appeared to take an unexpectedly long time
before the login page appeared. Further testing is required to determine
whether this behavior is reproducible.

### Result

Pass

---

# Resource Management Tests

## TC-RES-001 — Create a Course

**Test Type:** Functional  
**Priority:** High  
**Status:** Not Run

### Preconditions

- User is authenticated.
- Dashboard is open.

### Steps

1. Select the option to create a resource.
2. Enter the title "React Testing Fundamentals".
3. Select "Course" as the resource type.
4. Save the resource.

### Expected Result

- The course is created successfully.
- The course appears on the dashboard.
- The title and resource type are correct.
- The resource initially displays the expected completion status.

### Actual Result

Not yet tested.

---

## TC-RES-002 — Edit Existing Resource

**Test Type:** Functional  
**Priority:** High  
**Status:** Not Run

### Preconditions

- User is authenticated.
- At least one resource exists.

### Steps

1. Locate an existing resource.
2. Enter edit mode.
3. Change the title.
4. Save the changes.
5. Refresh the browser.

### Expected Result

- Updated title is displayed.
- Updated value remains after page refresh.
- No unrelated resource is modified.

### Actual Result

Not yet tested.

---

## TC-RES-003 — Mark Resource Complete

**Test Type:** Functional  
**Priority:** High  
**Status:** Not Run

### Preconditions

- User is authenticated.
- An incomplete resource exists.

### Steps

1. Locate the incomplete resource.
2. Change its completion status to complete.
3. Refresh the page.

### Expected Result

- Resource displays as completed.
- Completion status remains after refresh.

### Actual Result

Not yet tested.

---

## TC-RES-004 — Delete Resource

**Test Type:** Functional  
**Priority:** High  
**Status:** Not Run

### Preconditions

- User is authenticated.
- At least one test resource exists.

### Steps

1. Locate the test resource.
2. Select the delete action.
3. Complete any required confirmation.
4. Refresh the page.

### Expected Result

- Resource is removed.
- Deleted resource does not reappear after refresh.

### Actual Result

Not yet tested.


---

# Search and Filter Tests

## TC-SEARCH-001 — Search for Existing Resource

**Test Type:** Functional  
**Priority:** Medium  
**Status:** Not Run

### Preconditions

Resources include:

- React Testing Fundamentals
- Python Fundamentals
- Database Design

### Steps

1. Open the dashboard.
2. Enter "React" into the search field.

### Expected Result

- React Testing Fundamentals is displayed.
- Nonmatching resources are excluded.

### Actual Result

Not yet tested.

---

## TC-SEARCH-002 — Search With No Matching Resource

**Test Type:** Negative / Functional  
**Priority:** Medium  
**Status:** Not Run

### Steps

1. Enter a search value that does not match any resource.
2. Observe the results area.

### Expected Result

- No unrelated resources are displayed.
- Application remains stable.
- An appropriate empty result state is displayed if implemented.

### Actual Result

Not yet tested.

---

## TC-FILTER-001 — Filter Resources by Type

**Test Type:** Functional  
**Priority:** Medium  
**Status:** Not Run

### Preconditions

The account contains:

- At least one course
- At least one article
- At least one project

### Steps

1. Open the dashboard.
2. Select the Course filter.

### Expected Result

- Course resources are displayed.
- Article and project resources are excluded.

### Actual Result

Not yet tested.

---

## TC-FILTER-002 — Filter Completed Resources

**Test Type:** Functional  
**Priority:** Medium  
**Status:** Not Run

### Preconditions

Account contains completed and incomplete resources.

### Steps

1. Open the dashboard.
2. Select the completed-resource filter.

### Expected Result

- Only completed resources are displayed.

### Actual Result

Not yet tested.

---

## TC-SORT-001 — Sort Resources Alphabetically

**Test Type:** Functional  
**Priority:** Medium  
**Status:** Not Run

### Preconditions

Create resources:

- Zebra
- Apple
- Mango

### Steps

1. Open the dashboard.
2. Select ascending title sorting.

### Expected Result

Resources appear in this order:

1. Apple
2. Mango
3. Zebra

### Actual Result

Not yet tested.

---

# UI Tests

## TC-UI-001 — Dashboard at Mobile Width

**Test Type:** UI  
**Priority:** Medium  
**Status:** Not Run

### Environment

Browser:
Chrome

Viewport:
375 × 667

### Steps

1. Open Chrome Developer Tools.
2. Set viewport to 375 × 667.
3. Open the StudyFlow dashboard.
4. Review navigation, cards, controls, and page width.
5. Scroll vertically through the page.

### Expected Result

- Content remains inside the viewport.
- No horizontal overflow appears.
- Text remains readable.
- Controls remain accessible.
- Resource cards display correctly.

### Actual Result

Not yet tested.

---

## TC-UI-002 — Dashboard at Tablet Width

**Test Type:** UI  
**Priority:** Medium  
**Status:** Not Run

### Environment

Viewport:
768 × 1024

### Steps

1. Set browser viewport to 768 × 1024.
2. Navigate through the dashboard.
3. Review resource cards, controls, navigation, and text.

### Expected Result

- Layout remains usable.
- Content does not overlap.
- Controls remain accessible.
- No unintended horizontal scrolling occurs.

### Actual Result

Not yet tested.

---

## TC-UI-003 — Dashboard at Desktop Width

**Test Type:** UI  
**Priority:** Medium  
**Status:** Not Run

### Environment

Viewport:
1440 × 900

### Steps

1. Set viewport to 1440 × 900.
2. Open the dashboard.
3. Review navigation, spacing, cards, controls, and alignment.

### Expected Result

- Desktop layout displays correctly.
- Content is aligned.
- Controls and resources remain usable.

### Actual Result

Not yet tested.