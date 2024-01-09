import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("people route");
});

router.post("/", (req, res) => {
  res.send({ success: true, ...req.body });
});


export default router;