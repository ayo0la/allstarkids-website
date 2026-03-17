import { render, screen, fireEvent } from "@testing-library/react";
import Nav from "@/components/nav";

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

describe("Nav", () => {
  it("renders the logo and nav links", () => {
    render(<Nav />);
    expect(screen.getByAltText("All Star Kids Academy")).toBeInTheDocument();
    expect(screen.getByText("Programs")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("toggles mobile menu open and closed", () => {
    render(<Nav />);
    const toggle = screen.getByLabelText("Toggle menu");
    expect(screen.queryByRole("navigation", { name: "Mobile menu" })).not.toBeInTheDocument();
    fireEvent.click(toggle);
    expect(screen.getByRole("navigation", { name: "Mobile menu" })).toBeInTheDocument();
    fireEvent.click(toggle);
    expect(screen.queryByRole("navigation", { name: "Mobile menu" })).not.toBeInTheDocument();
  });
});
