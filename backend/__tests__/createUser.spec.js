const {createUsers} = require('../controllers/userController');

beforeEach(() => {
    jest.setTimeout(10000);
});

describe( "A simulated Habit Creation", () =>{
    test("It Should Return a Habit Json Object", async () =>{
        const userData = await createUsers(
        {
            body:{
                name:"tester",
                email:"test@test.co",
                password:"test"
            }
        },
        )
        expect(userData).toEqual({
            name:"tester",
            email:"test@test.co",
        })
    })    
})

describe( "A simulated failed create a user", () =>{
    test("It Should Return a Failed Json Object", async () =>{
        const userData = await createUsers(
        {
            body:{
                name:"fake",
            }
        },
        )
        expect(userData).toEqual({
            error: "Failed to Create User"
        })
    })    
})

