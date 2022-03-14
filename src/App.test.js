import { render, screen } from "@testing-library/react";
// import { mount } from 'enzyme';

import Topbar from "./components/Topbar";
import App from "./App"
import DevTeam from "./pages/DevTeam";

test('app renders logo', () => {
  render(<DevTeam />)
  const navTextElement = screen.getByText(/FRONT-END DEVS/i)
  expect(navTextElement).toBeInTheDocument()
})
