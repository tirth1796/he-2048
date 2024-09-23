## Problem Statement: Annotation Tool

You are tasked with building the **state management logic** for an annotation tool in **React**. This tool lets users select words or groups of words in a paragraph and add **positive** or **negative annotations** to them.

The paragraph is already rendered and styled for you. Your job is to focus on the logic for **selecting words**, **adding annotations**, and **resetting annotations**. This tool could be used for things like reviewing text, giving feedback, or highlighting important sections of a document.

### Requirements

1. **Word Selection**:
   - Users can **select individual words** by clicking.
   - Users can **select multiple words** by clicking with **Command (Mac)** or **Ctrl (Windows)** pressed.
   - Users should be able to **unselect all words** by pressing the **Escape** key.

2. **Annotation Menu**:
   - After selecting words, show a menu to:
     - Annotate as **Positive** or **Negative**.
     - **Reset** the annotation.
   - The menu should remain visible after annotating, allowing updates or resets.

3. **Multiple Annotations**:
   - Handle **positive and negative annotations** within the same paragraph.

4. **Reset Functionality**:
   - Users can reset annotations for selected words or groups.

### Notes

- Focus on managing **state** and **logic** for selection, annotation, resetting, and unselecting, using the provided UI components.

### Real Life Use-case
**Paragraph:**
_"The customer service at the restaurant was prompt and friendly, but the food took too long to arrive and was not well-cooked. The ambiance was pleasant, though the seating arrangement was somewhat cramped."_

In this example:
- **Positive annotations**:
  - "The customer service at the restaurant was **prompt** and **friendly**"
  - "The **ambiance** was pleasant"
  
- **Negative annotations**:
  - "the food took **too long** to arrive and was **not well-cooked**"
  - "the seating arrangement was somewhat **cramped**"

### Submission Instructions
1. Clicking "Run code" will compile and run your code against sample tests, but it will not generate scores. Click on "Execution Log" to better understand the test execution.
2. Clicking "Submit code" will run your code against multiple test cases, assessing different scenarios holistically. The score will be assigned accordingly.

To access the instructions, click on the "Question" button which can be found in the bottom left corner of the screen.