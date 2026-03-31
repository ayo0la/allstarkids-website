import { render, screen } from "@testing-library/react";
import Hero from "@/components/home/hero";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => <img {...props} />,
}));
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("Hero", () => {
  it("renders the headline text", () => {
    render(<Hero />);
    expect(screen.getByText("Where Every Child")).toBeInTheDocument();
    expect(screen.getByText("Becomes a Star")).toBeInTheDocument();
  });

  it("renders the enrollment CTA linking to /enroll", () => {
    render(<Hero />);
    const cta = screen.getByRole("link", { name: /start enrollment/i });
    expect(cta).toHaveAttribute("href", "/enroll");
  });

  it("renders the hero photo", () => {
    render(<Hero />);
    expect(screen.getByAltText("All Star Kids Academy facility")).toBeInTheDocument();
  });

  it("does not render decorative floating orb elements", () => {
    const { container } = render(<Hero />);
    const orbs = container.querySelectorAll("[class*='animate-float']");
    expect(orbs).toHaveLength(0);
  });
});
