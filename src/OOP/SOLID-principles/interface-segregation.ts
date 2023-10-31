//ISP (Interface segregation principle) - Принцип розділення інтерфейсу

interface JsonParser {
  jsonParse(): string;
}

interface HtmlParser {
  htmlParse(): string;
}

class UniversalParser implements JsonParser, HtmlParser {
  jsonParse(): string {
    return "Parsing JSON";
  }

  htmlParse(): string {
    return "Parsing HTML";
  }
}

class SpecificHTMLParser implements HtmlParser {
  htmlParse(): string {
    return "Specifically parsing HTML";
  }
}

export {};
