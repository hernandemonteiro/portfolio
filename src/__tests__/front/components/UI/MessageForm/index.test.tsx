import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import MessageForm from "../../../../../components/ui/MessageForm";

describe("<MessageForm/> test", () => {
  it("<MessageForm/>", async () => {
    render(<MessageForm message={"message form test"} />);
    await screen.findByText("message form test");
  });
});
