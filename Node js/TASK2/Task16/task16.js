const express = require('express');
const app = express();
const port = 3000;

const getSales = () => new Promise(res => setTimeout(() => res(85000), 200));
const getExpenses = () => new Promise(res => setTimeout(() => res(32000), 200));
const getRefunds = () => new Promise(res => setTimeout(() => res(0), 200));
const calcProfit = (sales, expenses, refunds) =>
  new Promise(res => setTimeout(() => res(sales - expenses - refunds), 150));
const calcTax = (profit) =>
  new Promise(res => setTimeout(() => res(Math.round(profit * 0.18)), 150));
const formatReport = (sales, expenses, profit, tax) =>
  new Promise(res => setTimeout(() => res({
    sales,
    expenses,
    profit,
    tax,
    netAfterTax: profit - tax
  }), 100));

app.get('/aggregate', async (req, res) => {
  console.time('aggregateTime'); 

  try {
    
    const [sales, expenses, refunds] = await Promise.all([
      getSales(),
      getExpenses(),
      getRefunds()
    ]);

    const [profit, tax, report] = await Promise.all([
      calcProfit(sales, expenses, refunds),
      calcTax(sales - expenses - refunds),
      formatReport(sales, expenses, sales - expenses - refunds, Math.round((sales - expenses - refunds) * 0.18))
    ]);

    console.timeEnd('aggregateTime'); 
    res.json({ ...report, timeTaken: `${Math.round(performance.now())}ms` }); 

  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
