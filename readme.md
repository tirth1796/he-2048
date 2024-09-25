# React Annotation Tool - State Management Logic

You are tasked with building the state management logic for an annotation tool in React. This tool lets users select words or groups of words in a paragraph and add **positive** or **negative annotations** to them.

The paragraph is already rendered and styled for you. Your job is to focus on the logic for **selecting words**, **adding annotations**, and **resetting annotations**. This tool could be used for tasks like reviewing text, giving feedback, or highlighting important sections of a document.

## Requirements

### Word Selection:

- Users can select **individual words** by clicking.
- Users can select **multiple words** by clicking with **Command (Mac)** or **Ctrl (Windows)** pressed.
- Users should be able to **unselect all words** by pressing the **Escape** key.
- Clicking on a **selected word or annotation** should **unselect** it.
- **Annotations cannot be selected** alongside other words or annotations.
  - **Command/Ctrl-clicking** an annotation when a word is selected will **deselect the word** and keep only the annotation.
  - **Command/Ctrl-clicking** another annotation will **deselect the previous one** and keep the last selection.
  - i.e., the **last selection** always takes precedence in case of conflict.

### Annotation Menu:

- After selecting words, show a menu to:
  - Annotate **Positive**.
  - Annotate **Negative**.
  - **Reset** the annotation.
- The menu should **remain visible** after annotating, allowing updates or resets.
- For selected annotations, the corresponding **annotation button** should be highlighted.

### Multiple Annotations:

- Support both **positive** and **negative annotations** within the same paragraph.
- Annotated groups (multiple words selected and annotated together) behave as a **unit**.
- **Resetting** removes the annotation from the entire group.
- Selecting an annotated word should **select the entire group**.
- Selecting an annotation will highlight the corresponding **Annotation Button** (Positive/Negative).

### Reset Functionality:

- Users should be able to **reset annotations** for individual words or groups.
- The **Reset** option should be disabled when selected words are not annotated.

## Real Life Use Case

**"The customer service at the restaurant was prompt and friendly, but the food took too long to arrive and was not well-cooked. The ambiance was pleasant, though the seating arrangement was somewhat cramped."**

In this example:

**Positive annotations**:

- "The customer service at the restaurant was **prompt** and **friendly**"
- "The **ambiance was pleasant.**"

**Negative annotations**:

- "The food took **too long** to arrive and was **not well-cooked.**"
- "The seating arrangement was somewhat **cramped.**"

### Submission Instructions

1. Clicking "Run code" will compile and run your code against sample tests, but it will not generate scores. Click on "Execution Log" to better understand the test execution.
2. Clicking "Submit code" will run your code against multiple test cases, assessing different scenarios holistically. The score will be assigned accordingly.

To access the instructions, click on the "Question" button which can be found in the bottom left corner of the screen.
