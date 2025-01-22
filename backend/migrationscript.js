import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./utils/db.js";
import EmailTemplate from "./models/emailTemplate.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const migrateConstantTemplates = async () => {
  await connectDB();

  try {
    const templatesDir = path.join(__dirname, "public/templates");
    const files = fs
      .readdirSync(templatesDir)
      .filter((file) => file !== ".DS_Store");

    for (const file of files) {
      const content = fs.readFileSync(path.join(templatesDir, file), "utf8");
      const templateName = file.replace(".html", "");

      const existingTemplate = await EmailTemplate.findOne({
        name: templateName,
        category: "constant",
      });

      if (!existingTemplate) {
        await EmailTemplate.create({
          name: templateName,
          layoutHTML: content,
          layoutCSS: "",
          layoutJS: "",
          category: "constant", // Mark as constant
        });
        console.log(`Template '${templateName}' added to the database.`);
      } else {
        console.log(`Template '${templateName}' already exists.`);
      }
    }
    console.log("Migration completed.");
  } catch (error) {
    console.error("Error during migration:", error.message);
  } finally {
    process.exit(0);
  }
};

migrateConstantTemplates();
