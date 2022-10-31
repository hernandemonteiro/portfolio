import { describe, it, expect } from "@jest/globals";
import { academyRepository } from "../../../back-end/repository/academy";
import AcademyService from "../../../back-end/services/academyService";
import { sinonMongooseStubs } from "../utils/services";

describe("Academy Services", () => {
  sinonMongooseStubs(academyRepository);
  it("getAll", async () => {
    const formations = await AcademyService.getAll();
    expect(formations.status).toBe("success");
  });
  it("createAcademy", async () => {
    const formation = {
      title: "title",
      foundation: "foundation",
      since: "since",
      status: "status",
    };
    const newFormation = await AcademyService.createAcademy(formation);
    expect(newFormation.status).toBe("success");
  });
  it("updateAcademy", async () => {
    const formation = {
      _id: "id",
      title: "title",
      foundation: "foundation",
      since: "since",
      status: "status",
    };
    const updatedFormation = await AcademyService.updateAcademy(formation);
    expect(updatedFormation.status).toBe("success");
  });
  it("deleteAcademy", async () => {
    const deletedFormation = await AcademyService.deleteAcademy("test_id");
    expect(deletedFormation.status).toBe("success");
  });
});
