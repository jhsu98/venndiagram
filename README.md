# venndiagram
Venn Diagram Practice Questions

## Installation
To install this application, download the files or clone to a web-accessible directory. Begin the application at index.html

## Setup
To add questions to the question pool, edit `questions.xml`.

Use the following template to add a question:
```
<QUESTION>
   <LABEL_SET_A></LABEL_SET_A>
   <LABEL_SET_B></LABEL_SET_B>
   <LABEL_SET_C></LABEL_SET_C>
   <QUESTION_TEXT></QUESTION_TEXT>
</QUESTION>
```

To add placeholder values in the question text, use one of the following variables nested in double pound symbols.

```
A_Only              B_Only              C_Only
A_and_B_not_C       A_and_C_not_B       B_and_C_not_A
A_and_B_and_C       not_A_or_B_or_C
                        
A_Whole             B_Whole             C_Whole
A_or_B_or_C

A_and_B             A_and_C             B_and_C
```

For example:
```
Of the ##A_Whole## children taking Science class, ##A_Only## children are not taking any other class.
```