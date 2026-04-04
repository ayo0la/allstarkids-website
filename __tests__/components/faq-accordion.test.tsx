import { render, screen, fireEvent } from "@testing-library/react";
import FaqAccordion from "@/components/faq-accordion";

const faqs = [
  { question: "Question one?", answer: "Answer one." },
  { question: "Question two?", answer: "Answer two." },
];

describe("FaqAccordion", () => {
  it("renders all questions", () => {
    render(<FaqAccordion items={faqs} />);
    expect(screen.getByText("Question one?")).toBeInTheDocument();
    expect(screen.getByText("Question two?")).toBeInTheDocument();
  });

  it("answers are hidden by default", () => {
    render(<FaqAccordion items={faqs} />);
    expect(screen.queryByText("Answer one.")).not.toBeInTheDocument();
  });

  it("clicking a question reveals the answer", () => {
    render(<FaqAccordion items={faqs} />);
    fireEvent.click(screen.getByText("Question one?"));
    expect(screen.getByText("Answer one.")).toBeInTheDocument();
  });

  it("clicking again hides the answer", () => {
    render(<FaqAccordion items={faqs} />);
    fireEvent.click(screen.getByText("Question one?"));
    fireEvent.click(screen.getByText("Question one?"));
    expect(screen.queryByText("Answer one.")).not.toBeInTheDocument();
  });
});
