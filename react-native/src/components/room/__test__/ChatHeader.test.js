"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const enzyme_to_json_1 = __importDefault(require("enzyme-to-json"));
const enzyme_1 = require("enzyme");
const React = __importStar(require("react"));
const ChatHeader_1 = __importDefault(require("../ChatHeader"));
const initialProps = {
    user: {
        langsToLearn: {
            french: "intermediate",
            italian: "beginner",
            spanish: "fluent"
        },
        age: 23,
        lat: 46.144516,
        pseudo: "pseudo",
        lon: 6.081338,
        langsToTeach: {
            english: "native",
            spanish: "fluent"
        },
        geohash: 3661469831164302,
        city: "Genève",
        avatar: "cute",
        profession: "profession"
    },
    profile: {
        langsToLearn: {
            english: "beginner",
            french: "fluent",
            german: "intermediate"
        },
        profession: "Legal Assistant",
        city: "Genève",
        geohash: 872962206,
        langsToTeach: {
            french: "fluent",
            italian: "bilingual",
            spanish: "native"
        },
        lon: 6.107057129141845,
        pseudo: "Maëlle",
        avatar: "pelican",
        lat: 46.08995392215012,
        age: 23,
        id: "IEY3I5fpxQilwKzPt0Sc"
    }
};
it("ChatHeader", () => {
    const tree = enzyme_1.shallow(
    // @ts-ignore
    React.createElement(ChatHeader_1.default, Object.assign({}, initialProps)));
    expect(enzyme_to_json_1.default(tree)).toMatchSnapshot();
    tree
        .find("Styled(Button)")
        .props()
        // @ts-ignore
        .onPress();
    expect(enzyme_to_json_1.default(tree)).toMatchSnapshot();
});
