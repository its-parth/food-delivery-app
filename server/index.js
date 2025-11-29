import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import axios from "axios";
import puppeteer from "puppeteer";


const app = express();
const PORT = 5000;

app.use(cors());


app.get("/api/swiggy-menu", async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
    });

    const page = await browser.newPage();

    // This makes Cloudflare/WAF happy
    await page.goto("https://www.swiggy.com/", {
      waitUntil: "networkidle2",
    });

    const data = await page.evaluate(async () => {
      const url =
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9966&lng=77.5920&restaurantId=2415";

      const response = await fetch(url, {
        credentials: "include",
      });

      return await response.json();
    });

    await browser.close();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/', (req, res) => {
    res.send('Hie');
});


app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
