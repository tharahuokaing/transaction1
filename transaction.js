(() => {
    "use strict";

    /* =========================================================
       LEDGER TRANSACTION SYSTEM SIMULATED REGISTRY
    ========================================================= */
    const TRANSACTION_REGISTRY = [
        { id: "TXN-KN-90214", party: "Acc...8841 (Thorn)", network: "Bakong API Link", direction: "outflow", amount: 0, time: "00:00:00", status: "Success" },
        { id: "TXN-KN-90215", party: "Acc...1092 (Vanneat)", network: "FAST Clearing Node", direction: "inflow", amount: 0, time: "00:00:00", status: "Success" },
        { id: "TXN-KN-90216", party: "Acc...4412 (Mengly)", network: "Interbank ISO Gateway", direction: "inflow", amount: 0, time: "00:00:00", status: "Success" },
        { id: "TXN-KN-90217", party: "Acc...0029 (Leyu)", network: "National Clearing House", direction: "outflow", amount: 0, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90218", party: "Acc...9912 (Sengchhat)", network: "Bakong Transfer Sweep", direction: "inflow", amount: 0, time: "00:00:11", status: "Success" },
        { id: "TXN-KN-90219", party: "Acc...5541 (Chansamnang)", network: "Real-time Gross Settlement", direction: "outflow", amount: 0, time: "00:00:00", status: "Failed" },
        { id: "TXN-KN-90220", party: "Acc...1182 (Raem)", network: "Retail Mobile Gateway", direction: "outflow", amount: 0, time: "00:00:00", status: "Pending" }
    ];

    let currentFilter = "all";
    let searchQuery = "";

    /* =========================================================
       CALCULATION & ANALYTICS PIPELINES
    ========================================================= */
    function recalculatePipelineSummary() {
        const totalVolume = TRANSACTION_REGISTRY
            .filter(tx => tx.status === "Success")
            .reduce((sum, tx) => sum + tx.amount, 0);

        const pendingCount = TRANSACTION_REGISTRY
            .filter(tx => tx.status === "Pending").length;

        const volEl = document.getElementById("totalVolumeText");
        const pendEl = document.getElementById("pendingCountText");

        if (volEl) volEl.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalVolume);
        if (pendEl) pendEl.textContent = pendingCount.toString();
    }

    /* =========================================================
       DATA TRANSFORMATION & RENDER ENGINES
    ========================================================= */
    function renderLedgerMatrix() {
        const tbody = document.getElementById("transactionTableBody");
        if (!tbody) return;

        // Apply visual logic constraints based on application search filter parameters
        const datasets = TRANSACTION_REGISTRY.filter(tx => {
            const matchesTab = (currentFilter === "all") || (tx.direction === currentFilter) || (currentFilter === "pending" && tx.status === "Pending");
            const matchesSearch = tx.id.toLowerCase().includes(searchQuery) || tx.party.toLowerCase().includes(searchQuery) || tx.network.toLowerCase().includes(searchQuery);
            return matchesTab && matchesSearch;
        });

        if (datasets.length === 0) {
            tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#64748b; padding:30px;">No records identified matching pipeline parameters.</td></tr>`;
            return;
        }

        tbody.innerHTML = datasets.map(tx => {
            const displayAmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tx.amount);
            const classDirection = tx.direction === "inflow" ? "txt-inflow" : "txt-outflow";
            const badgeState = tx.status.toLowerCase();

            return `
                <tr>
                    <td style="font-weight:600; color:#38bdf8;">${tx.id}</td>
                    <td>${tx.party}</td>
                    <td style="color:#94a3b8;">${tx.network}</td>
                    <td><span class="direction-badge">${tx.direction.toUpperCase()}</span></td>
                    <td class="${classDirection}">${tx.direction === "inflow" ? "+" : "-"}${displayAmt}</td>
                    <td style="color:#64748b;">${tx.time}</td>
                    <td><span class="badge ${badgeState}">${tx.status}</span></td>
                </tr>
            `;
        }).join("");
    }

    /* =========================================================
       EVENT SUBSCRIPTIONS ENGINE BINDINGS
    ========================================================= */
    document.addEventListener("DOMContentLoaded", () => {
        recalculatePipelineSummary();
        renderLedgerMatrix();

        // Search execution keyup hook bindings
        const searchInput = document.getElementById("txSearchInput");
        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                searchQuery = e.target.value.toLowerCase().trim();
                renderLedgerMatrix();
            });
        }

        // Processing workflow tabs controls click parameters execution mapping
        const tabGroup = document.getElementById("filterTabsGroup");
        if (tabGroup) {
            tabGroup.addEventListener("click", (e) => {
                const button = e.target.closest(".tab-btn");
                if (!button) return;

                tabGroup.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                currentFilter = button.getAttribute("data-filter");
                renderLedgerMatrix();
            });
        }

        // Force manual execution pipeline refresh system triggers simulation
        document.getElementById("refreshTxBtn")?.addEventListener("click", () => {
            console.log("[TRANSACTION ARCHITECTURE] Flushing transaction clearing pipeline logs...");
            recalculatePipelineSummary();
            renderLedgerMatrix();
        });

        // Export data engine simulation hook bindings
        document.getElementById("exportLedgerBtn")?.addEventListener("click", () => {
            alert("Ledger structure compiled successfully. Initializing local database stream transmission...");
        });
    });

})();
