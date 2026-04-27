const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        COUNT(*) as total_leads,
        SUM(CASE WHEN converted = true THEN 1 ELSE 0 END) as conversions,
        SUM(revenue) as revenue
      FROM leads
    `);

    const data = result.rows[0];

    const total_leads = Number(data.total_leads) || 0;
    const conversions = Number(data.conversions) || 0;
    const revenue = Number(data.revenue) || 0;

    const conversion_rate = total_leads > 0 ? conversions / total_leads : 0;

    // 💰 simulação API externa (marketing)
    const marketing_spend = 500;

    const roi = marketing_spend > 0 ? revenue / marketing_spend : 0;

    // 📈 crescimento (simulado)
    const previous_leads = total_leads - 5 > 0 ? total_leads - 5 : 1;
    const growth = ((total_leads - previous_leads) / previous_leads) * 100;

    // 📅 atividade por dia (simulado)
    const daily = [
      { date: "Seg", value: 10 },
      { date: "Ter", value: 20 },
      { date: "Qua", value: 15 },
      { date: "Qui", value: 30 },
      { date: "Sex", value: 25 }
    ];

    res.json({
      leads: total_leads,
      conversions,
      revenue,
      conversion_rate,
      marketing_spend,
      roi,
      growth,
      daily
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;