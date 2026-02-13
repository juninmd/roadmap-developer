from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Go to homepage
    print("Navigating to homepage...")
    page.goto("http://localhost:4173/")
    page.screenshot(path="homepage.png")
    print("Homepage screenshot taken.")

    # Go to backend roadmap
    print("Navigating to backend roadmap...")
    page.goto("http://localhost:4173/roadmaps/backend/backend.html")
    # Wait for mermaid diagram to render if possible, or just wait a bit
    page.wait_for_timeout(2000)
    page.screenshot(path="backend_roadmap.png")
    print("Backend roadmap screenshot taken.")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
