import { supabase } from "utils/supabaseClient";

export async function handler(req, res) {
    if (req.method === "POST") {
        const body = req.body;
        
        const { data, error } = await supabase
            .from("contact")
            .insert([req.body]);
        if (error) return res.status(500).json({ error: error.message });
        return res.status(200).json(data);
    }