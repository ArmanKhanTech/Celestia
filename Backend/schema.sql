--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: conversations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.conversations (
    cid character varying(255) NOT NULL,
    participants jsonb NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.conversations OWNER TO postgres;

--
-- Name: groups; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.groups (
    gid character varying(255) NOT NULL,
    cid character varying(255) NOT NULL,
    gname character varying(100) NOT NULL,
    members jsonb NOT NULL,
    description text DEFAULT ''::text,
    admins jsonb NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.groups OWNER TO postgres;

--
-- Name: messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.messages (
    mid character varying(255) NOT NULL,
    cid character varying(255) NOT NULL,
    message text NOT NULL,
    sender character varying(255) NOT NULL,
    sent_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    receiver character varying(255),
    received_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    status character varying(20) DEFAULT 'sent'::character varying,
    attachments jsonb
);


ALTER TABLE public.messages OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    uid character varying(255) NOT NULL,
    uname character varying(50) NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(255) NOT NULL,
    date_join timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    is_active boolean DEFAULT false,
    last_seen timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    pfp_url text DEFAULT ''::text,
    status text DEFAULT ''::text
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: conversations conversations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conversations
    ADD CONSTRAINT conversations_pkey PRIMARY KEY (cid);


--
-- Name: groups groups_cid_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_cid_key UNIQUE (cid);


--
-- Name: groups groups_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_pkey PRIMARY KEY (gid);


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (mid);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (uid);


--
-- Name: users users_uname_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_uname_key UNIQUE (uname);


--
-- Name: idx_conversations_participants; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_conversations_participants ON public.conversations USING gin (participants);


--
-- Name: idx_groups_cid; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_groups_cid ON public.groups USING btree (cid);


--
-- Name: idx_groups_members; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_groups_members ON public.groups USING gin (members);


--
-- Name: idx_messages_cid; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_messages_cid ON public.messages USING btree (cid);


--
-- Name: idx_messages_sent_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_messages_sent_at ON public.messages USING btree (sent_at);


--
-- Name: idx_users_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_users_email ON public.users USING btree (email);


--
-- Name: idx_users_uname; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_users_uname ON public.users USING btree (uname);


--
-- Name: groups groups_cid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_cid_fkey FOREIGN KEY (cid) REFERENCES public.conversations(cid) ON DELETE CASCADE;


--
-- Name: messages messages_cid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_cid_fkey FOREIGN KEY (cid) REFERENCES public.conversations(cid) ON DELETE CASCADE;


--
-- Name: messages messages_receiver_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_receiver_fkey FOREIGN KEY (receiver) REFERENCES public.users(uid) ON DELETE CASCADE;


--
-- Name: messages messages_sender_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_sender_fkey FOREIGN KEY (sender) REFERENCES public.users(uid) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

