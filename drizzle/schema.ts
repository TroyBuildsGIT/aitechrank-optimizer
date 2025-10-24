import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Evaluations table - stores all page evaluations
 */
export const evaluations = mysqlTable("evaluations", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId"),
  url: text("url").notNull(),
  pageType: mysqlEnum("pageType", ["homepage", "airbnb", "landing"]).notNull(),
  overallScore: int("overallScore").notNull(),
  performanceScore: int("performanceScore").notNull(),
  contentScore: int("contentScore").notNull(),
  designScore: int("designScore").notNull(),
  conversionScore: int("conversionScore").notNull(),
  completenessScore: int("completenessScore").notNull(),
  issues: text("issues").notNull(), // JSON array
  strengths: text("strengths").notNull(), // JSON array
  recommendations: text("recommendations").notNull(), // JSON array
  screenshotUrl: text("screenshotUrl"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Evaluation = typeof evaluations.$inferSelect;
export type InsertEvaluation = typeof evaluations.$inferInsert;