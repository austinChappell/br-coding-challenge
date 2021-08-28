const rewire = require("rewire")
const RestaurantDetails = rewire("./RestaurantDetails")
const mapStateToProps = RestaurantDetails.__get__("mapStateToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ generalReducer: { currentLocation: "https://" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ generalReducer: { currentLocation: "https://accounts.google.com/o/oauth2/revoke?token=%s" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ generalReducer: { currentLocation: "https://api.telegram.org/bot" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ generalReducer: { currentLocation: "https://croplands.org/app/a/reset?token=" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ generalReducer: { currentLocation: "https://croplands.org/app/a/confirm?t=" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
