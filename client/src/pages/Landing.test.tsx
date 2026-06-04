import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Landing from "./Landing";

describe("Landing", () => {
  it("renders the StudyFlow hero and CTA links", () => {
    render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );

    expect(screen.getByText(/Track your learning progress with clarity/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Get Started|Open Dashboard/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Sign In/i })).toBeInTheDocument();
  });
});