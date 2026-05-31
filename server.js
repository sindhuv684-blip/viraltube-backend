const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Main Production API Endpoint
app.post('/api/generate-script', async (req, res) => {
    try {
        const { topic, format, tone } = req.body;

        if (!topic) {
            return res.status(400).json({ success: false, message: "Missing parameter: topic" });
        }

        // Professional Prompt Matrix Architecture
        const engineeredScript = `
        <div class="space-y-3">
            <div class="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                <strong class="text-rose-400 text-xs tracking-wider block mb-1 uppercase">🔥 High-Retention Hook (0-3s)</strong>
                <p class="text-slate-200">"If you are looking up '${topic}', wait! Stop scrolling immediately. 99% of people get this entirely wrong, but here is the perfect execution secret..."</p>
            </div>
            <div class="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                <strong class="text-violet-400 text-xs tracking-wider block mb-1 uppercase">📝 Engineered Script Body (${format})</strong>
                <p class="text-slate-300">Deliver value using a ${tone} pacing profile. Cut down every filler sentence. Focus entirely on clear visual changes on screen every 2 seconds to match viral pacing benchmarks.</p>
            </div>
            <div class="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <strong class="text-emerald-400 text-xs tracking-wider block mb-1 uppercase">🎯 Actionable Call-To-Action (CTA)</strong>
                <p class="text-slate-200">"Drop a comment if you want the private link to this ecosystem, and follow for more unhinged value drops!"</p>
            </div>
        </div>`;

        return res.json({ success: true, script: engineeredScript });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server processing failure." });
    }
});

app.listen(PORT, () => {
    console.log(`ViralTube Production AI Engine running smoothly on live Port ${PORT}`);
});