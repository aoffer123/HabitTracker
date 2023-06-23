const {createHabits} = require('../controllers/habitController');

beforeEach(() => {
    jest.setTimeout(10000);
});

describe( "A simulated Habit Creation", () =>{
    test("It Should Return a Habit Json Object", async () =>{
        const userData = await createHabits(
        {
            body:{
                name:"tester",
                description:"this is a test",
                category:"Exercise",
                importance:"High",
                password:"test",
                date: 1686929922371
            },
            cookies:{
                jwt:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2U0MzhkZjU4YmNhYTcyMTA3NzIxZCIsIm5hbWUiOiJ0ZXN0Iiwicm9sZSI6IlVzZXIiLCJpYXQiOjE2ODY5Mjk2MDZ9.c5W3EeYvmjXZndXvI1ej2Vl_KpQUtKppP6wo_M-yGEU"
            }

        },
        )
        expect(userData).toEqual({
            name: 'tester',
            userId: '647e438df58bcaa72107721d',
            description: 'this is a test',
            category: 'Exercise',
            importance: 'High',
            date: 1686929922371
          })
    })    
})




