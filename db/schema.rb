# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150917154708) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boards", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description"
    t.string   "category"
    t.integer  "creator_id",  null: false
    t.boolean  "secret"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "boards", ["creator_id"], name: "index_boards_on_creator_id", using: :btree

  create_table "pins", force: :cascade do |t|
    t.text     "description"
    t.integer  "pinner_id",   null: false
    t.integer  "board_id",    null: false
    t.string   "image_url"
    t.string   "source_url"
    t.string   "image_alt"
    t.integer  "via_user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "pins", ["board_id"], name: "index_pins_on_board_id", using: :btree
  add_index "pins", ["pinner_id"], name: "index_pins_on_pinner_id", using: :btree
  add_index "pins", ["via_user_id"], name: "index_pins_on_via_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "session_token"
    t.string   "password_digest"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

end
