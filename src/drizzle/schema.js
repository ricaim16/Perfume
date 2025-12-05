import {
  pgTable,
  uuid,
  text,
  integer,
  numeric,
  timestamp,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  role: text("role").notNull(),
  created_at: timestamp("created_at").defaultNow(),
});

export const perfumes = pgTable("perfumes", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  brand: text("brand"),
  size_ml: integer("size_ml"),
  quantity: integer("quantity").default(0),
  price: numeric("price", 10, 2),
  notes: text("notes"),
  image: text("image"),
  created_at: timestamp("created_at").defaultNow(),
});

export const likes = pgTable("likes", {
  id: uuid("id").defaultRandom().primaryKey(),
  user_id: uuid("user_id").references(() => users.id),
  perfume_id: uuid("perfume_id").references(() => perfumes.id),
  created_at: timestamp("created_at").defaultNow(),
});

export const sales = pgTable("sales", {
  id: uuid("id").defaultRandom().primaryKey(),
  user_id: uuid("user_id").references(() => users.id),
  perfume_id: uuid("perfume_id").references(() => perfumes.id),
  quantity: integer("quantity"),
  total_price: numeric("total_price", 10, 2),
  created_at: timestamp("created_at").defaultNow(),
});

// ✅ Add posts table
export const posts = pgTable("posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  author: text("author").notNull(),
  image: text("image"), // optional
  created_at: timestamp("created_at").defaultNow(),
});
