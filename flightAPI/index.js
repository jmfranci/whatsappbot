const puppeteer = require("puppeteer");
log = console.log;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.tripadvisor.com/CheapFlightsHome");

  const res = await page.$(
    "#taplc_trip_search_home_flights_0 > div.prw_rup.prw_flights_trip_search_form.ui_column > div > span > div.tabContent.roundTrip.active > div.ui_columns.trip_search.rounded_lockup.easyClear.is-multiline > div.prw_rup.prw_flights_trip_search_typeahead.ui_column.is-6-tablet.is-6-desktop.rtTypeahead > div > div.orig.ui_column.is-6.is-6-tablet.map-pin-fill.ui_icon.pickerType.ui_typeahead > input.query.origWithLabel"
  );

  await res.click();

  await page.screenshot({ path: "example.png" });
  await browser.close();
})();
