/*
All your life, you've been pretty good about handling your money. But unfortunately, as your grandmother and grandfather have gotten older in age, their ability to handle their accounting has gone down. You want to write an algorithm that can help them to automatically calculate their monthly expenses and income!

Write an algorithm that, given an array of objects (where every object represents either an expense or a source of income), can calculate the total sum of expenses and income and track the difference.

If a given object in the array has a key of "expense", it means that that object represents a given expense.
If a given object in the array has a key of "income", it means that that object represents a given source of income.

For example:
When given an array like this:
[
    {
        income: 500,
        description: 'social security check'
    },
    {
        expense: 100,
        description: 'new clothes'
    },
    {
        income: 1500,
        description: 'biweekly paycheck'
    },
    {
        expense: 250,
        description: 'groceries'
    }
]

Your function should return an object that looks like this:
{
    totalExpenses: 350,
    totalIncome: 2000
}

Since 100+250 (the two expenses) adds up to 350, and 1500+500 (the two sources of income) add up to 2000.
*/

// Write your code below: 