import { beforeEach, afterEach } from "@jest/globals";
import sinon from "sinon";

export function sinonMongooseStubs(repository) {
  const returnStub = { status: "success" };

  beforeEach(() => {
    const methodsDb = [
      "find",
      "findById",
      "create",
      "findByIdAndUpdate",
      "findByIdAndDelete",
    ];
    for (let i = 0; i < methodsDb.length; i++) {
      sinon.stub(repository, methodsDb[i]).returns(returnStub);
    }
  });
  afterEach(() => sinon.restore());
}

export function sinonMongooseStubsFailure(repository) {
  const returnStub = new Error("test");

  beforeEach(() => {
    const methodsDb = [
      "find",
      "findById",
      "create",
      "findByIdAndUpdate",
      "findByIdAndDelete",
    ];
    for (let i = 0; i < methodsDb.length; i++) {
      sinon.stub(repository, methodsDb[i]).rejects(returnStub);
    }
  });
  afterEach(() => sinon.restore());
}
