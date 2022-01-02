const app = require('../app.js')
const path = require("path")
const fs = require('fs')
const request = require('supertest');

// yyyy-mm-dd, adding preceding 0's will break moment 

describe("test holidays", () => {
    // christmas
    test("GET /holiday", async () => {
        request(app)
        .get("/holiday")
        .query({date: "2022-12-25"})
        .expect(200)
        .then((res) => {
            expect(res.text).toBe(fs.readFileSync(path.resolve(__dirname, '../ascii_art/holidays/christmas.txt')).toString())
        })
    });
    // newyears
    test("GET /holiday", () => {
        request(app)
        .get("/holiday")
        .query({date: "2022-1-1"})
        .expect(200)
        .then((res) => {
            expect(res.text).toBe(fs.readFileSync(path.resolve(__dirname, '../ascii_art/holidays/newyears.txt')).toString())
        })
    });
    // mlk
    test("GET /holiday", () => {
        request(app)
        .get("/holiday")
        .query({date: "2022-1-17"})
        .expect(200)
        .then((res) => {
            expect(res.text).toBe(fs.readFileSync(path.resolve(__dirname, '../ascii_art/holidays/mlk.txt')).toString())
        })
    });
    // groundhog
    test("GET /holiday", () => {
        request(app)
        .get("/holiday")
        .query({date: "2022-2-2"})
        .expect(200)
        .then((res) => {
            expect(res.text).toBe(fs.readFileSync(path.resolve(__dirname, '../ascii_art/holidays/groundhog.txt')).toString())
        })
    });
    // valentines
    test("GET /holiday", () => {
        request(app)
        .get("/holiday")
        .query({date: "2022-2-14"})
        .expect(200)
        .then((res) => {
            expect(res.text).toBe(fs.readFileSync(path.resolve(__dirname, '../ascii_art/holidays/valentines.txt')).toString())
        })
    });
    // presidents
    test("GET /holiday", () => {
        request(app)
        .get("/holiday")
        .query({date: "2022-2-21"})
        .expect(200)
        .then((res) => {
            expect(res.text).toBe(fs.readFileSync(path.resolve(__dirname, '../ascii_art/holidays/presidents.txt')).toString())
        })
    });
    // stpatricks
    test("GET /holiday", () => {
        request(app)
        .get("/holiday")
        .query({date: "2022-3-17"})
        .expect(200)
        .then((res) => {
            expect(res.text).toBe(fs.readFileSync(path.resolve(__dirname, '../ascii_art/holidays/stpatricks.txt')).toString())
        })
    });
    // easter
    test("GET /holiday", () => {
        request(app)
        .get("/holiday")
        .query({date: "2022-4-17"})
        .expect(200)
        .then((res) => {
            expect(res.text).toBe(fs.readFileSync(path.resolve(__dirname, '../ascii_art/holidays/easter.txt')).toString())
        })
    });
    // cinco
    test("GET /holiday", () => {
        request(app)
        .get("/holiday")
        .query({date: "2022-5-5"})
        .expect(200)
        .then((res) => {
            expect(res.text).toBe(fs.readFileSync(path.resolve(__dirname, '../ascii_art/holidays/cincodemayo.txt')).toString())
        })
    });
    // memorial
    test("GET /holiday", () => {
        request(app)
        .get("/holiday")
        .query({date: "2022-5-30"})
        .expect(200)
        .then((res) => {
            expect(res.text).toBe(fs.readFileSync(path.resolve(__dirname, '../ascii_art/holidays/memorial.txt')).toString())
        })
    });
    // independence
    test("GET /holiday", () => {
        request(app)
        .get("/holiday")
        .query({date: "2022-7-4"})
        .expect(200)
        .then((res) => {
            expect(res.text).toBe(fs.readFileSync(path.resolve(__dirname, '../ascii_art/holidays/independence.txt')).toString())
        })
    });
    // labor
    test("GET /holiday", () => {
        request(app)
        .get("/holiday")
        .query({date: "2022-9-5"})
        .expect(200)
        .then((res) => {
            expect(res.text).toBe(fs.readFileSync(path.resolve(__dirname, '../ascii_art/holidays/labor.txt')).toString())
        })
    });
    // columbus
    test("GET /holiday", () => {
        request(app)
        .get("/holiday")
        .query({date: "2022-10-10"})
        .expect(200)
        .then((res) => {
            expect(res.text).toBe(fs.readFileSync(path.resolve(__dirname, '../ascii_art/holidays/columbus.txt')).toString())
        })
    });
    // halloween
    test("GET /holiday", () => {
        request(app)
        .get("/holiday")
        .query({date: "2022-10-31"})
        .expect(200)
        .then((res) => {
            expect(res.text).toBe(fs.readFileSync(path.resolve(__dirname, '../ascii_art/holidays/halloween.txt')).toString())
        })
    });
    // veterans
    test("GET /holiday", () => {
        request(app)
        .get("/holiday")
        .query({date: "2022-11-11"})
        .expect(200)
        .then((res) => {
            expect(res.text).toBe(fs.readFileSync(path.resolve(__dirname, '../ascii_art/holidays/veterans.txt')).toString())
        })
    });
    // thanksgiving
    test("GET /holiday", () => {
        request(app)
        .get("/holiday")
        .query({date: "2022-11-24"})
        .expect(200)
        .then((res) => {
            expect(res.text).toBe(fs.readFileSync(path.resolve(__dirname, '../ascii_art/holidays/thanksgiving.txt')).toString())
        })
    });
});

