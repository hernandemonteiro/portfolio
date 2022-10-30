import { describe, it, expect } from "@jest/globals";
import { ownerInfoRepository } from "../../../back-end/repository/ownerInfo";
import OwnerInfoService from "../../../back-end/services/ownerInfoService";
import { sinonMongooseStubs } from "../utils/services";

describe("Article Services", () => {
  sinonMongooseStubs(ownerInfoRepository);
  it("getOwnerInfo", async () => {
    const ownerInfos = await OwnerInfoService.getOwnerInfo();
    expect(ownerInfos.status).toBe("success");
  });

  it("createOwnerInfo", async () => {
    const OwnerInfos = {
      picture: "picture",
      name: "name",
      email: "email",
      birthday: "birthday",
      title: "title",
      resume: "resume",
    };
    const newOwnerInfos = await OwnerInfoService.createOwnerInfo(OwnerInfos);
    expect(newOwnerInfos.status).toBe("success");
  });

  it("updateOwnerInfo", async () => {
    const ownerInfos = {
      _id: "id",
      picture: "picture",
      name: "name",
      email: "email",
      birthday: "birthday",
      title: "title",
      resume: "resume",
    };
    const updatedOwnerInfos = await OwnerInfoService.updateOwnerInfo(
      ownerInfos
    );
    expect(updatedOwnerInfos.status).toBe("success");
  });

  it("deleteOwnerInfo", async () => {
    const deletedOwnerInfos = await OwnerInfoService.deleteOwnerInfo("id");
    expect(deletedOwnerInfos.status).toBe("success");
  });
});
