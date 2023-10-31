//ISP (Interface segregation principle) - Принцип розділення інтерфейсу
class UniversalParser {
    jsonParse() {
        return "Parsing JSON";
    }
    htmlParse() {
        return "Parsing HTML";
    }
}
class SpecificHTMLParser {
    htmlParse() {
        return "Specifically parsing HTML";
    }
}
export {};
//# sourceMappingURL=interface-segregation.js.map