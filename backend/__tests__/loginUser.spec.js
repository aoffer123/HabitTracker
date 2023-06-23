const {loginUsers} = require('../controllers/userController');

beforeEach(() => {
    jest.setTimeout(10000);
});

describe( "A simulated log in", () =>{
    test("It Should Return a Success Json Object", async () =>{
        const userData = await loginUsers(
        {
            body:{
                name:"test",
                password:"test"
            }
        },
        )
        expect(userData).toEqual({
            message: "Login Sucessful",
            user: "647e438df58bcaa72107721d",
            name: "test"
        })
    })    
})

describe( "A simulated failed login", () =>{
    test("It Should Return a Failed Json Object", async () =>{
        const userData = await loginUsers(
        {
            body:{
                name:"fake",
                password:"pass"
            }
        },
        )
        expect(userData).toEqual({
            message: "Login Failed",
            error: "Incorrect Password"
        })
    })    
})
