# React Annotation Tool - State Management Logic

You are tasked with building the state management logic for an annotation tool in React. The paragraph is already rendered and styled for you. Your job is to focus on the logic for **selecting words**, **adding annotations**, and **resetting annotations**.

## Requirements

### Annotation

- Multiple Words selected together and annotated will behave as a group called Annotation
- Selecting one word from an annotation selects all the words of the annotation.
- Selecting an annotation also marks the corresponding **Annotate Positive** or **Annotate Negative** as **selected**
- Changing or resetting annotation from one word of an annotation will do so for all the words of the annotation
- **Annotations CANNOT be selected** alongside other **words** or **annotations**.
  - **Command/Ctrl-clicking** an annotation when a word is selected will **deselect the word** and keep only the annotation.
  - **Command/Ctrl-clicking** another annotation will **deselect the previous one** and keep the last selection.
  - i.e., the **last selection** always takes precedence in case of conflict.

### Word Selection:

- Users can select **individual words** by clicking.
- Users can select **multiple words** by clicking with **Command (Mac)** or **Ctrl (Windows)** pressed.
- Clicking on a **selected word or annotation** should **unselect** it.
- Selected word(s) or annotation should remain selected after any action

### Actions

- **Annotate Positive** Should annotate the selected word(s) or annotation as **"positive"**
- **Annotate Negative** Should annotate the selected word(s) or annotation as **"negative"**
- **Reset Annotation** Should reset the annotation or mark the words as **default**
  - The **Reset Annotation** button should be disabled when selected words are not annotated.

### Submission Instructions

1. Clicking "Run code" will compile and run your code against sample tests, but it will not generate scores. Click on "Execution Log" to better understand the test execution.
2. Clicking "Submit code" will run your code against multiple test cases, assessing different scenarios holistically. The score will be assigned accordingly.

To access the instructions, click on the "Question" button which can be found in the bottom left corner of the screen.
