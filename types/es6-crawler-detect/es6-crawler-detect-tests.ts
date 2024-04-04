import { Crawler, middleware } from "es6-crawler-detect";

const crawler = new Crawler();

crawler.isCrawler();
crawler.isCrawler("some user agent");
crawler.compileRegex(["some", "patterns"], "g");
crawler.setHttpHeaders();
crawler.setHttpHeaders({ "foo": "foo-value" });
crawler.setUserAgent();
crawler.setUserAgent("some user agent");
crawler.getUaHttpHeaders();
crawler.getMatches();

const middlewareFn = middleware((req, res) => {});
middlewareFn({}, {}, () => {});
