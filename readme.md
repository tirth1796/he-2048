## React Annotation Tool - State Management Logic

Your task is to build the state management logic for an annotation tool in React. The paragraph is already styled and rendered. Focus on handling **word selection**, **adding annotations**, and **resetting** them.

### Key Concepts

- **Annotation**: A group of words selected together and annotated.
- **Actions**: **Annotate Positive**, **Annotate Negative**, and **Reset Annotation**.

### Requirements

#### Annotations

- **Grouped Behavior**: Selecting one word in an annotation selects the **entire group**.
- **Annotation Selection**: When an annotation is selected, the corresponding **Annotate Positive** or **Annotate Negative** option is marked.
- **Consistent Updates**: Changing or resetting the annotation of one word in a group affects the **whole annotation**.
- **Exclusive Selection**: Words or annotations **cannot** be selected alongside other words or annotations.
- **Command/Ctrl-click**:
  - Clicking an annotation while a word is selected will **deselect** the word and keep only the annotation.
  - Clicking a different annotation will **deselect** the previous one, making the **last selection** active.

#### Word Selection

- **Individual Selection**: Users can select **individual words** by clicking.
- **Multi-Word Selection**: **Command (Mac)** or **Ctrl (Windows)** + click allows multiple word selection.
- **Deselecting**: Clicking on a **selected word** or annotation will unselect it.
- **Persistence**: Selected words/annotations should stay selected **after any action**.

#### Actions

- **Annotate Positive**: Annotates the selected word(s) or annotation as **"Positive"**.
- **Annotate Negative**: Annotates the selected word(s) or annotation as **"Negative"**.
- **Reset Annotation**: Resets the annotation or marks the words as **default**.
  - This option is **disabled** if the selected words are not annotated.

### Submission Instructions

1. Clicking "Run code" will compile and run your code against sample tests, but it will not generate scores. Click on "Execution Log" to better understand the test execution.
2. Clicking "Submit code" will run your code against multiple test cases, assessing different scenarios holistically. The score will be assigned accordingly.

To access the instructions, click on the "Question" button which can be found in the bottom left corner of the screen.
