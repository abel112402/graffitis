import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors()); // engedélyezi a localhostról jövő kéréseket

// Proxy végpont Nominatim kereséshez
app.get('/api/search', async (req, res) => {
  try {
    const q = req.query.q;
    if (!q) return res.status(400).json({ error: 'Missing query parameter' });

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}&addressdetails=1&limit=5`;
    const response = await fetch(url, {
      headers: { 'User-Agent': 'GraffitiApp/1.0' } // Nominatim kér User-Agent-et
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Proxy végpont reverse geocodinghez
app.get('/api/reverse', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    if (!lat || !lon) return res.status(400).json({ error: 'Missing lat or lon' });

    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`;
    const response = await fetch(url, {
      headers: { 'User-Agent': 'GraffitiApp/1.0' }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Proxy fut: http://localhost:3000'));
    