import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskCard from "./TaskCard";
import { describe, expect, it, vi } from "vitest";

const task = {
  id: 1,
  title: "React Router notes",
  type: "course",
  completed: false,
};

describe("TaskCard", () => {
  it("enters edit mode on double click", async () => {
    const user = userEvent.setup();

    render(
      <TaskCard
        task={task}
        onUpdate={vi.fn()}
        onDelete={vi.fn()}
      />
    );

    await user.dblClick(screen.getByText(/React Router notes/i));

    expect(screen.getByDisplayValue(/React Router notes/i)).toBeInTheDocument();
  });
});