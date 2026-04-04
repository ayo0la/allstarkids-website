import { render, screen } from "@testing-library/react";
import Footer from "@/components/footer";

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

describe("Footer", () => {
  it("renders the Quality Rated badge", () => {
    render(<Footer />);
    expect(screen.getByAltText("Quality Rated Child Care")).toBeInTheDocument();
  });

  it("renders the Child Care Licensing badge", () => {
    render(<Footer />);
    expect(screen.getByAltText("Child Care Licensing")).toBeInTheDocument();
  });

  it("renders contact info", () => {
    render(<Footer />);
    expect(screen.getByText(/4518 Covington/)).toBeInTheDocument();
  });
});
