import { Helper } from "../src/helper";
test("toUrlIntent()", () => {
	const url: string = "/anyurl/test#areaname.viewtypeName:last";
	const urlDataIntent = Helper.toUrlDataIntent(url);
	expect(urlDataIntent).toHaveProperty("url", "/anyurl/test");
	expect(urlDataIntent).toHaveProperty("intentUrl", "areaname.viewtypeName:last");
	expect(urlDataIntent).toHaveProperty("intent.areaName", "areaname");
	expect(urlDataIntent).toHaveProperty("intent.viewType", "viewtypeName".toLowerCase());
	expect(urlDataIntent).toHaveProperty("intent.instanceId", "last");
});
test("isViewIntentPath()", () => {
	expect(Helper.isViewIntentPath("areaName.ViewTypeName")).toBe(true);
	expect(Helper.isViewIntentPath("areaNameViewTypeName")).toBe(false);
});
test("pathToIntent()", () => {
	const intent1 = Helper.pathToIntent("areaName.ViewTypeName");
	const intent2 = Helper.pathToIntent("areaName.ViewTypeName:new");
	expect(intent1).toHaveProperty("areaName");
	expect(intent1).toHaveProperty("instanceId");
	expect(intent1).toHaveProperty("viewState");
	expect(intent1).toHaveProperty("viewType");
	// ----------------
	expect(intent2).toHaveProperty("areaName");
	expect(intent2).toHaveProperty("instanceId");
	expect(intent2).toHaveProperty("viewState");
	expect(intent2).toHaveProperty("viewType");
});
test("getStoreName()", () => {
	expect(Helper.getStoreName("areaName", "view-type-name")).toBe("areaname.viewtypename");
});