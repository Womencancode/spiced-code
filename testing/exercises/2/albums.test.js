// spotify.js exports a method named search that does an http request to get search
// results from Spotify. albums.js exports a method named getAlbumNames that calls
// spotify.search to get a list of albums and then returns an array containing just
// the album names in alphabetical order. albums.test.js contains a test of
// albums.getAlbumNames that is not passing. The problem is that the spotify module
// is mocked but nothing has been done to make the mock's search method to return
// what albums.getAlbumNames and the test expects. Your task is to correct this problem
// and make the test pass.

const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("album names are in alphabetical order", () => {
    spotify.search.mockResolvedValue({
        albums: {
            items: [
                { name: "Album" },
                { name: "Blbum" },
                { name: "Clbum" },
                { name: "Dlbum" }
            ]
        }
    });
    return getAlbumNames("meat loaf").then(albumNames => {
        expect(albumNames).toEqual(albumNames.sort());
    });
});
